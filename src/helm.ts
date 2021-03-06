export const PREVIEW_SCHEME = 'helm-template-preview';
export const PREVIEW_URI = PREVIEW_SCHEME + '://preview';
export const INSPECT_SCHEME = 'helm-inspect-values';
export const HELM_OUTPUT_COLUMN_SEPARATOR = /\t+/g;
export const INSPECT_CHART_SCHEME = 'helm-inspect-chart';
export const INSPECT_CHART_REPO_AUTHORITY = 'repo-chart';

let previewShown = false;

export function hasPreviewBeenShown(): boolean {
    return previewShown;
}

export function recordPreviewHasBeenShown(): void {
    previewShown = true;
}
