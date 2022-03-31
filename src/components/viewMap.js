import * as React from 'react';
import {BADGE_ENHANCER_SIZES, FixedMarker} from 'baseui/map-marker';
import ReactMapGL, {Marker, NavigationControl} from 'react-map-gl';
import MapGl from 'react-map-gl'
import {ArrowDown, Show} from "baseui/icon";
import {Block} from "baseui/block";
export default function ViewMap(props) {
    const location = {
        latitude: props.latitude,
        longitude: props.longitude,
    };
    const [viewport, setViewport] = React.useState({
        ...location,
        zoom: 16,
    });
    return (
        <Block>

        <div style={{
            width: '100%',
            height: '200px',
            overflow: "hidden",
            borderRadius: '20px'
        }}>
        <MapGl
            {...viewport}
            width="100%"
            height="500px"
            onViewportChange={viewport => setViewport(viewport)}
            mapStyle="mapbox://styles/mapbox/light-v10"
            mapboxAccessToken={"pk.eyJ1IjoidW5pb25ncm91cCIsImEiOiJja3h6ZDJjOHg2cXJmMm9vNGFneTRqcHBuIn0.N15PnrMqg1_vLgeNXryfRQ"}
        >
            <NavigationControl />
            <Marker {...location} >

            </Marker>
        </MapGl>
        </div>
            <FixedMarker
                startEnhancer={({size}) => <ArrowDown size={size} />}
                badgeEnhancerSize={BADGE_ENHANCER_SIZES.mediumText}
                badgeEnhancerContent={() => props.badgeText}
                label= {props.pinText}
                overrides={{
                    Root: {
                        style: () => ({
                            transform: `translate(0%, -250%)`,
                        }),
                    },
                    BadgeEnhancer: {
                        style: {
                            backgroundColor: props.badgeColor,
                        },
                    },
                }}
            />
        </Block>
    );
}