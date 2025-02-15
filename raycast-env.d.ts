/// <reference types="@raycast/api">

/* 🚧 🚧 🚧
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 * 🚧 🚧 🚧 */

/* eslint-disable @typescript-eslint/ban-types */

type ExtensionPreferences = {
  /** 17Track API Token - Your 17track API Key - get one at 17Track.com */
  "apiKey": string
}

/** Preferences accessible in all the extension's commands */
declare type Preferences = ExtensionPreferences

declare namespace Preferences {
  /** Preferences accessible in the `trackParcel` command */
  export type TrackParcel = ExtensionPreferences & {}
}

declare namespace Arguments {
  /** Arguments passed to the `trackParcel` command */
  export type TrackParcel = {
  /** e.g. "RR123465789CN" */
  "packageNumber": string
}
}

