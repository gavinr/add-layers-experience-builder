/** @jsx jsx */
import {
  AllWidgetProps,
  BaseWidget,
  css,
  jsx,
  DataSourceComponent,
  loadArcGISJSAPIModules
} from "jimu-core";
import { MapViewDataSource } from "jimu-arcgis/lib/data-source";
import { IMConfig } from "../config";

// import { TabContent, TabPane, Nav, NavItem, NavLink, Button} from 'jimu-ui';
import defaultMessages from "./translations/default";

interface IState {
  featureServiceUrlInput: string;
  ds: MapViewDataSource;
}

export default class Widget extends BaseWidget<
  AllWidgetProps<IMConfig>,
  IState
> {
  // Give types to the modules we import from the ArcGIS API for JavaScript
  // to tell TypeScript what types they are.
  FeatureLayer: typeof __esri.FeatureLayer;
  Query: typeof __esri.Query;
  SpatialReference: typeof __esri.SpatialReference;

  constructor(props) {
    super(props);

    // Default/initial values of the state.
    this.state = {
      featureServiceUrlInput: "",
      ds: null
    };
  }

  // Every time the input box value changes, this function gets called.
  // We set our component's state so we can use the value in the formSubmit function.
  handleFeatureServiceUrlInputChange = event => {
    this.setState({
      featureServiceUrlInput: event.target.value
    });
  };

  formSubmit = evt => {
    evt.preventDefault();
    if (this.state.featureServiceUrlInput !== "") {
      // Lazy-loading (Only load if needed) the ArcGIS API for JavaScript modules
      // that we need - only once the "Add Layer" button is pressed.
      loadArcGISJSAPIModules([
        "esri/layers/FeatureLayer",
        "esri/tasks/support/Query",
        "esri/geometry/SpatialReference"
      ]).then(modules => {
        [this.FeatureLayer, this.Query, this.SpatialReference] = modules;

        // First create the Feature Layer from the URL that is in the box.
        const layer = new this.FeatureLayer({
          url: this.state.featureServiceUrlInput
        });

        // Add the layer to the map (accessed through the Experience Builder Data Source)
        this.state.ds.view.map.add(layer);

        // After the layer is created, zoom to the layer's extent, if the setting is set for that.
        layer.on("layerview-create", event => {
          if (
            this.props.config.hasOwnProperty("zoomToLayer") &&
            this.props.config.zoomToLayer === true
          ) {
            const query = new this.Query();
            query.where = "1=1";
            query.outSpatialReference = new this.SpatialReference({
              wkid: 102100
            });
            layer.queryExtent(query).then(results => {
              this.state.ds.view.extent = results.extent;
            });
          }

          // Process of adding the layer is complete - remove the layer URL from the box so we can add another
          this.setState({
            featureServiceUrlInput: ""
          });
        });
      });
    } else {
      // Nothing was typed into the box!
      alert("Please copy/paste in a FeatureService URL");
    }
  };

  render() {
    const style = css`
      form > div {
        display: flex;
        justify-content: space-between;
        input {
          width: 100%;
        }
        button {
          min-width: 100px;
        }
      }
    `;
    return (
      <div className="widget-addLayers jimu-widget" css={style}>
        <DataSourceComponent
          onDataSourceCreated={(ds: MapViewDataSource) => {
            this.setState({
              ds: ds
            });
          }}
          useDataSource={this.props.useDataSources[0]}
        ></DataSourceComponent>

        <p>{defaultMessages.instructions}</p>

        <form onSubmit={this.formSubmit}>
          <div>
            <input
              type="text"
              placeholder={defaultMessages.featureServiceUrl}
              value={this.state.featureServiceUrlInput}
              onChange={this.handleFeatureServiceUrlInputChange}
            />
            <button>{defaultMessages.addLayer}</button>
          </div>
        </form>
      </div>
    );
  }
}
