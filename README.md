# "Add Layers" - Experience Builder
Example Experience Builder widget showing how to add a Feature Layer to a map.

![Screenshot](https://github.com/gavinr/add-layers-experience-builder/raw/master/screenshot.png)

## Quick Start - Download

1. [Download](https://developers.arcgis.com/downloads/apis-and-sdks?product=arcgis-experience-builder) and unzip [Experience Builder Developer Edition](https://developers.arcgis.com/experience-builder/).
2. Download the latest [release](https://github.com/gavinr/add-layers-experience-builder/releases) from this repository.
3. Unzip the downloaded files, and copy the `addLayers` folder into the `client\your-extensions\widgets\addLayers` folder of the extracted Experience Builder files.

## Quick Start - Git

1. [Download](https://developers.arcgis.com/downloads/apis-and-sdks?product=arcgis-experience-builder) and unzip [Experience Builder Developer Edition](https://developers.arcgis.com/experience-builder/).
2. Open a new terminal window and browse to the `client` folder.
3. `git clone https://github.com/gavinr/add-layers-experience-builder`
4. `npm ci`
5. `npm start`
6. Start Experience Builder server per the instructions (in a separate terminal, `cd server`, `npm ci`, `npm start`)

## Development

1. Open the `client` folder as a project in VS Code (or similar code editor).
1. Make sure *both* scripts are running (in the `server` folder and `client`) folder).
1. Every time you make a change to your widget, it will be re-built with webpack automatically.
