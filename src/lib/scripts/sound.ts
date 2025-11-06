import { sfx } from './assets';

/**
 * Sound manager for playing UI sound effects
 */
class SoundManager {
	private audioContext: AudioContext | null = null;
	private sounds: Map<string, AudioBuffer> = new Map();
	private volume: number = 0.3; // Default volume (0.0 to 1.0)
	private enabled: boolean = true;
	private isInitialized: boolean = false;
	hasUserGesture: boolean = false; // Track if user has ever interacted

	constructor() {
		// Create AudioContext immediately (will be suspended until user gesture)
		if (typeof window !== 'undefined') {
			this.audioContext = new AudioContext();
			// Check if user has previously interacted (from sessionStorage)
			this.hasUserGesture = sessionStorage.getItem('audioInitialized') === 'true';
		}
	}

	/**
	 * Initialize the audio context (call this after user interaction)
	 */
	private async initAudioContext() {
		if (!this.audioContext && typeof window !== 'undefined') {
			try {
				this.audioContext = new AudioContext();
			} catch (error) {
				console.error('Failed to create AudioContext:', error);
				return;
			}
		}
		if (this.audioContext && this.audioContext.state === 'suspended') {
			try {
				await this.audioContext.resume();
				this.isInitialized = true;
			} catch (error) {
				console.error('Failed to resume AudioContext:', error);
			}
		} else if (this.audioContext) {
			this.isInitialized = true;
		}
	}

	/**
	 * Load a sound file and cache it
	 */
	private async loadSound(url: string): Promise<AudioBuffer> {
		if (this.sounds.has(url)) {
			return this.sounds.get(url)!;
		}

		await this.initAudioContext();

		const response = await fetch(url);
		const arrayBuffer = await response.arrayBuffer();
		const audioBuffer = await this.audioContext!.decodeAudioData(arrayBuffer);

		this.sounds.set(url, audioBuffer);
		return audioBuffer;
	}

	/**
	 * Play a sound from a URL
	 */
	async play(url: string, volumeOverride?: number) {
		if (!this.enabled) return;

		// Don't play if user hasn't interacted yet
		if (!this.hasUserGesture) {
			console.log('No user gesture yet, skipping sound');
			return;
		}

		try {
			// Always ensure audio context is ready before playing
			await this.initAudioContext();

			if (!this.audioContext) {
				console.error('AudioContext is null');
				return;
			}
			
			const buffer = await this.loadSound(url);

			const source = this.audioContext.createBufferSource();
			const gainNode = this.audioContext.createGain();

			source.buffer = buffer;
			gainNode.gain.value = volumeOverride ?? this.volume;

			source.connect(gainNode);
			gainNode.connect(this.audioContext.destination);

			source.start(0);
		} catch (error) {
			console.error('Error playing sound:', error);
		}
	}

	/**
	 * Play a click sound
	 */
    async playClick2() {
		await this.play(sfx.click.click2);
	}
    async playClick3() {
		await this.play(sfx.click.click3);
	}
	async playClick4() {
		await this.play(sfx.click.click4);
	}
    async playClick5() {
		await this.play(sfx.click.click5);
	}
    async playClick6() {
		await this.play(sfx.click.click6);
	}
    async playClick7() {
		await this.play(sfx.click.click7);
	}

	/**
	 * Play a random rollover (hover) sound
	 */
	async playRollover() {
		const rollovers = [sfx.rollover.rollover1, sfx.rollover.rollover2, sfx.rollover.rollover3];
		const randomRollover = rollovers[Math.floor(Math.random() * rollovers.length)];
		await this.play(randomRollover, 0.2); // Quieter for hover
	}

	/**
	 * Play sidebar open sound
	 */
	async playSidebarOpen() {
		await this.play(sfx.sidebar.sidebarOpen2);
	}

	/**
	 * Play sidebar collapse sound
	 */
	async playSidebarCollapse() {
		await this.play(sfx.sidebar.sidebarCollapse2);
	}

	/**
	 * Set the volume for all sounds
	 */
	setVolume(value: number) {
		this.volume = Math.max(0, Math.min(1, value));
	}

	/**
	 * Enable or disable sounds
	 */
	setEnabled(enabled: boolean) {
		this.enabled = enabled;
	}

	/**
	 * Get current volume
	 */
	getVolume(): number {
		return this.volume;
	}

	/**
	 * Check if sounds are enabled
	 */
	isEnabled(): boolean {
		return this.enabled;
	}

	/**
	 * Preload all sounds for better performance (only after user interaction)
	 */
	async preloadAll() {
		// Only preload if audio context can be initialized (after user interaction)
		if (!this.isInitialized) {
			return; // Skip preloading, sounds will load on demand
		}

		const allSounds = [
			...Object.values(sfx.click),
			...Object.values(sfx.rollover),
			...Object.values(sfx.sidebar),
		];

		await Promise.all(allSounds.map(url => this.loadSound(url)));
	}

	/**
	 * Initialize audio on first user interaction
	 */
	async initializeOnUserGesture() {
		console.log('User gesture detected, initializing audio...');
		this.hasUserGesture = true;
		// Store in sessionStorage so it persists across SvelteKit navigation
		if (typeof window !== 'undefined') {
			sessionStorage.setItem('audioInitialized', 'true');
		}
		await this.initAudioContext();
		// After initialization, preload all sounds
		if (this.isInitialized) {
			await this.preloadAll();
		}
	}

	/**
	 * Check if user has interacted (for UI state)
	 */
	hasUserInteracted(): boolean {
		return this.hasUserGesture;
	}
}

// Export a singleton instance
export const soundManager = new SoundManager();
