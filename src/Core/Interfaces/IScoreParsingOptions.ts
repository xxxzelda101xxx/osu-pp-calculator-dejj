/**
 * Options for score parsing.
 */
export interface IScoreParsingOptions {
  /**
   * Custom replay file URL.
   */
  replayURL?: string;

  /**
   * Output replay life bar if replay file is present?
   * @default false
   */
  lifeBar?: boolean;

  /**
   * Path to the replay file save location.
   * @default "./cache"
   */
  savePath?: string;

  /**
   * Hash of the target beatmap. Used to validate beatmap files.
   * If wasn't specified then file will not be validated.
   */
  hash?: string;
}
