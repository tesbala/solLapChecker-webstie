// The one place to change where the Windows installer comes from.
// Every Download button, the version line and the Release notes link read from here.

/** GitHub "owner/repo" that publishes the installer as a release asset. */
export const GITHUB_REPO = "sollabstech/solLapChecker-windows-exe";

/** Release asset name; must be the same in every release. */
export const INSTALLER_FILE = "SolLapChecker_Setup.exe";

/** Direct download link for the installer. */
export const DOWNLOAD_URL = "https://drive.google.com/file/d/1-PJMsEeWacYe04JPmCbqB5v0lIHKcwZv/view?usp=drive_link";

/** The newest release's page (release notes). */
export const RELEASE_NOTES_URL = `https://github.com/${GITHUB_REPO}/releases/latest`;

/** Public API for the newest release (tag_name, published_at). */
export const LATEST_RELEASE_API = `https://api.github.com/repos/${GITHUB_REPO}/releases/latest`;
