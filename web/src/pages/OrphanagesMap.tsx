import React from 'react';
import { Link } from "react-router-dom";
import { FiPlus } from "react-icons/fi";
import { Map, TileLayer } from "react-leaflet";

import 'leaflet/dist/leaflet.css';

import mapMarkerImg from '../images/map-marker.svg';

import "../styles/pages/orphanages-map.css";

function OrphanageMap() {
  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={mapMarkerImg} alt="Happy" />

          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita :)</p>
        </header>

        <footer>
          <strong>Minas Gerais</strong>
          <span>Belo Horizonte</span>
        </footer>
      </aside>

      <Map 
        center={[-19.9025412,-44.03409]} 
        zoom={12} 
        style={{ width: '100%', height: '100%' }} 
      >
        {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" /> */}
        <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoicmdvdWxhcnRpIiwiYSI6ImNrZzhuZGUwbjBmNmozNnM1bXgwOHQxdGkifQ.wpadRg-YqE8Wy2kRA2oMYw`} />
      </Map>

      <Link to="" className="create-orphanage">
        <FiPlus size={32} color="#fff " />
      </Link>
    </div>
  );
}

export default OrphanageMap;