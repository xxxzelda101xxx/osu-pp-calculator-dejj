/**
 * Options for beatmap parsing.
 */
export interface IBeatmapParsingOptions {
  /**
   * ID of the target beatmap.
   */
  beatmapId?: string | number;

  /**
   * Path to the beatmap file save location.
   */
  savePath?: string;

  /**
   * Custom file URL of the target beatmap.
   */
  fileURL?: string;

  /**
   * Hash of the target beatmap. Used to validate beatmap files.
   * If wasn't specified then file will not be validated.
   */
  hash?: string;
}
