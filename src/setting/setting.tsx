/** @jsx jsx */
import { React, FormattedMessage, css, jsx } from "jimu-core";
import { BaseWidgetSetting, AllWidgetSettingProps } from "jimu-for-builder";
import { Switch } from "jimu-ui";
import { SettingSection, SettingRow } from "jimu-ui/setting-components";
import { IMConfig } from "../config";
import defaultMessages from "./translations/default";

export default class Setting extends BaseWidgetSetting<
  AllWidgetSettingProps<IMConfig>,
  any
> {
  onZoomToLayerPropertyChange = (evt: React.FormEvent<HTMLInputElement>) => {
    this.props.onSettingChange({
      id: this.props.id,
      config: this.props.config.set("zoomToLayer", evt.currentTarget.checked)
    });
  };

  render() {
    const style = css`
      .widget-setting-addLayers {
        .checkbox-row {
          display: flex;
          justify-content: space-between;
          margin-bottom: 8px;
        }
      }
    `;
    return (
      <div css={style}>
        <div className="widget-setting-addLayers">
          <SettingSection
            title={this.props.intl.formatMessage({
              id: "settingsLabel",
              defaultMessage: defaultMessages.settings
            })}
          >
            <SettingRow>
              <div className="w-100 addLayers">
                <div className="checkbox-row">
                  <label>
                    <FormattedMessage
                      id="zoomToLayer"
                      defaultMessage={defaultMessages.zoomToLayer}
                    />
                  </label>
                  <Switch
                    checked={
                      (this.props.config && this.props.config.zoomToLayer) ||
                      false
                    }
                    onChange={this.onZoomToLayerPropertyChange}
                  />
                </div>
              </div>
            </SettingRow>
          </SettingSection>
        </div>
      </div>
    );
  }
}
