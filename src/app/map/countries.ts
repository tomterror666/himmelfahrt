import Austia from "world-geojson/countries/austria.json";
import Iceland from "world-geojson/countries/iceland.json";
import Norway from "world-geojson/countries/norway.json";
import Sweden from "world-geojson/countries/sweden.json";
import Finland from "world-geojson/countries/finland.json";
import Estonia from "world-geojson/countries/estonia.json";
import Latvia from "world-geojson/countries/latvia.json";
import Lithuania from "world-geojson/countries/lithuania.json";
import Russia from "./russia.json";
import Belarus from "world-geojson/countries/belarus.json";
import Ukraine from "world-geojson/countries/ukraine.json";
import Moldova from "world-geojson/countries/moldova.json";
import Poland from "world-geojson/countries/poland.json";
import Czechia from "world-geojson/countries/czech.json";
import Slovakia from "world-geojson/countries/slovakia.json";
import Hungary from "world-geojson/countries/hungary.json";
import Romania from "world-geojson/countries/romania.json";
import Bulgaria from "world-geojson/countries/bulgaria.json";
import Greece from "world-geojson/countries/greece.json";
import Slovenia from "world-geojson/countries/slovenia.json";
import Croatia from "world-geojson/countries/croatia.json";
import Bosnia from "world-geojson/countries/bosnia_and_herzegovina.json";
import Montenegro from "world-geojson/countries/montenegro.json";
import Serbia from "world-geojson/countries/serbia.json";
import NorthMacedonia from "world-geojson/countries/north_macedonia.json";
import Albania from "world-geojson/countries/albania.json";
import Italy from "world-geojson/countries/italy.json";
import France from "world-geojson/countries/france.json";
import Spain from "world-geojson/countries/spain.json";
import Portugal from "world-geojson/countries/portugal.json";
import Andorra from "world-geojson/countries/andorra.json";
import Luxembourg from "world-geojson/countries/luxembourg.json";
import Liechtenstein from "world-geojson/countries/liechtenstein.json";
import Netherlands from "world-geojson/countries/netherlands.json";
import Belgium from "world-geojson/countries/belgium.json";
import Denmark from "world-geojson/countries/denmark.json";
import UK from "world-geojson/areas/united_kingdom/united_kingdom.json";
import Ireland from "world-geojson/countries/ireland.json";
import Germany from "world-geojson/countries/germany.json";
import Switzerland from "world-geojson/countries/switzerland.json";
import type { Feature } from "geojson";
import { LatLngExpression } from "leaflet";

export enum CountryColors {
  home = "#00f",
  untaken = "#0f0",
  onceTaken = "#8f0",
  twiceTaken = "#ef0",
  oftenTaken = "#fd0",
  somehowInvalid = "#f80",
  totalyInvalid = "#f00",
}

export type Visit = {
  coords: LatLngExpression;
  year: string;
  author: string;
  image?: string;
  url?: string;
};

type country = {
  name: string;
  geoJson: GeoJSON.Feature[];
  color: CountryColors;
  reasonText?: string;
  visits?: Visit[];
};

export const countries: country[] = [
  {
    name: "Iceland",
    geoJson: Iceland.features as Feature[],
    color: CountryColors.untaken,
  },
  {
    name: "Norway",
    geoJson: Norway.features as Feature[],
    color: CountryColors.untaken,
  },
  {
    name: "Sweden",
    geoJson: Sweden.features as Feature[],
    color: CountryColors.onceTaken,
    visits: [
      {
        coords: {
          lat: 56.005799345670525,
          lng: 13.705022085931274,
        },
        author: "Karsten",
        year: "2005",
        image: "2005.jpg",
        url: "https://e.pcloud.link/publink/show?code=HiKotalK#/filemanager?folder=4131952924",
      }
    ],
  },
  {
    name: "Finland",
    geoJson: Finland.features as Feature[],
    color: CountryColors.onceTaken,
    visits: [
      {
        coords: {
          lat: 60.27427234400985,
          lng: 25.71839082220834,
        },
        author: "Guru",
        year: "2016",
        image: "2016.JPG",
        url: "https://e.pcloud.link/publink/show?code=HiKotalK#/filemanager?folder=4131911280",
      }
    ],
  },
  {
    name: "Estonia",
    geoJson: Estonia.features as Feature[],
    color: CountryColors.untaken,
  },
  {
    name: "Latvia",
    geoJson: Latvia.features as Feature[],
    color: CountryColors.onceTaken,
    visits: [
      {
        coords: {
          lat: 57.12563258534469,
          lng: 24.707637639399753,
        },
        author: "Christian",
        year: "2018",
        image: "2018.JPG",
        url: "https://e.pcloud.link/publink/show?code=HiKotalK#/filemanager?folder=4126960676",
      },
    ],
  },
  {
    name: "Lithuania",
    geoJson: Lithuania.features as Feature[],
    color: CountryColors.untaken,
  },
  {
    name: "Poland",
    geoJson: Poland.features as Feature[],
    color: CountryColors.onceTaken,
    visits: [
      {
        coords: {
          lat: 54.79160368564599,
          lng: 17.833306814367155,
        },
        author: "Thomas",
        year: "2007",
        image: "2007.jpg",
        url: "https://e.pcloud.link/publink/show?code=HiKotalK#/filemanager?folder=4292545509",
      },
    ],
  },
  {
    name: "Czechia",
    geoJson: Czechia.features as Feature[],
    color: CountryColors.oftenTaken,
    visits: [
      {
        coords: {
          lat: 50.78241433589184,
          lng: 15.421797068914886,
        },
        author: "Bungalow 6",
        year: "1991 - 2002",
      },
      {
        coords: {
          lat: 50.77774195966258,
          lng: 15.413426971145046,
        },
        author: "Christian",
        year: "2011",
        image: "2011.jpg",
        url: "https://e.pcloud.link/publink/show?code=HiKotalK#/filemanager?folder=4131966101",
      },
      {
        coords: {
          lat: 50.55255165697728,
          lng: 14.676904191220707,
        },
        author: "Christian",
        year: "2004",
        image: "2004.jpg",
        url: "https://e.pcloud.link/publink/show?code=HiKotalK#/filemanager?folder=4131943953",
      },
    ],
  },
  {
    name: "Slovakia",
    geoJson: Slovakia.features as Feature[],
    color: CountryColors.onceTaken,
    visits: [
      {
        coords: {
          lat: 49.2697417866096,
          lng: 19.611166647937374,
        },
        author: "Guru",
        year: "2008",
        image: "2008.jpg",
        url: "https://e.pcloud.link/publink/show?code=HiKotalK#/filemanager?folder=4131959886",
      }
    ],
  },
  {
    name: "Hungaria",
    geoJson: Hungary.features as Feature[],
    color: CountryColors.onceTaken,
    visits: [
      {
        coords: {
          lat: 46.83004916353817,
          lng: 17.61262871003211
        },
        author: "Thomas",
        year: "2024",
        image: "2024.JPG",
        url: "https://e.pcloud.link/publink/show?code=HiKotalK#/filemanager?folder=11082437835",
      },
    ],
  },
  {
    name: "Romania",
    geoJson: Romania.features as Feature[],
    color: CountryColors.untaken,
  },
  {
    name: "Bulgaria",
    geoJson: Bulgaria.features as Feature[],
    color: CountryColors.untaken,
  },
  {
    name: "Greece",
    geoJson: Greece.features as Feature[],
    color: CountryColors.untaken,
  },
  {
    name: "Austria",
    geoJson: Austia.features as Feature[],
    color: CountryColors.twiceTaken,
    visits: [
      {
        coords: {
          lat: 46.71229696153462,
          lng: 13.294809201247979,
        },
        author: "Ronny",
        year: "2006",
      },
      {
        coords: {
          lat: 47.204354858347166,
          lng: 11.885831992367661,
        },
        author: "Lars",
        year: "2015",
        image: "2015.JPG",
        url: "https://e.pcloud.link/publink/show?code=HiKotalK#/filemanager?folder=4132303126",
      },
    ],
  },
  {
    name: "Slovenia",
    geoJson: Slovenia.features as Feature[],
    color: CountryColors.untaken,
  },
  {
    name: "Croatia",
    geoJson: Croatia.features as Feature[],
    color: CountryColors.onceTaken,
    visits: [
      {
        coords: {
          lat: 45.29557133430332,
          lng: 13.824103543870802,
        },
        author: "Andre",
        year: "2009",
        image: "2009.jpg",
        url: "https://e.pcloud.link/publink/show?code=HiKotalK#/filemanager?folder=4131966103",
      },
    ],
  },
  {
    name: "Serbia",
    geoJson: Serbia.features as Feature[],
    color: CountryColors.untaken,
  },
  {
    name: "Bosnia",
    geoJson: Bosnia.features as Feature[],
    color: CountryColors.untaken,
  },
  {
    name: "Montenegro",
    geoJson: Montenegro.features as Feature[],
    color: CountryColors.untaken,
  },
  {
    name: "NorthMacedonia",
    geoJson: NorthMacedonia.features as Feature[],
    color: CountryColors.untaken,
  },
  {
    name: "Albania",
    geoJson: Albania.features as Feature[],
    color: CountryColors.untaken,
  },
  {
    name: "Italy",
    geoJson: Italy.features as Feature[],
    color: CountryColors.onceTaken,
    visits: [
      {
        coords: {
          lat: 43.21571947856483,
          lng: 11.904641193155095,
        },
        author: "Andre",
        year: "2017",
        image: "2017.JPG",
        url: "https://e.pcloud.link/publink/show?code=HiKotalK#/filemanager?folder=4126961711",
      }
    ],
  },
  {
    name: "France",
    geoJson: France.features as Feature[],
    color: CountryColors.onceTaken,
    visits: [
      {
        coords: {
          lat: 48.00275855334836,
          lng: 6.921083849469072,
        },
        author: "Thomas",
        year: "2014",
        image: "2014.JPG",
        url: "https://e.pcloud.link/publink/show?code=HiKotalK#/filemanager?folder=4131912983",
      }
    ],
  },
  {
    name: "Spain",
    geoJson: Spain.features as Feature[],
    color: CountryColors.twiceTaken,
    visits: [
      {
        coords: {
          lat: 39.832242864808926,
          lng: -4.026327973732069,
        },
        author: "Ronny",
        year: "2023",
        image: "2023.JPG",
        url: "https://e.pcloud.link/publink/show?code=HiKotalK#/filemanager?folder=6526735820",
      },
      {
        coords: {
          lat: 39.71002456009616,
          lng: 2.8906267314468685,
        },
        author: "Karsten",
        year: "2012",
        image: "2012.JPG",
        url: "https://e.pcloud.link/publink/show?code=HiKotalK#/filemanager?folder=4131913793",
      },
    ],
  },
  {
    name: "Portugal",
    geoJson: Portugal.features as Feature[],
    color: CountryColors.onceTaken,
    visits: [
      {
        coords: {
          lat: 38.81203867217964,
          lng: -9.454233866431503,
        },
        author: "Karsten",
        year: "2019",
        image: "2019.JPG",
        url: "https://e.pcloud.link/publink/show?code=HiKotalK#/filemanager?folder=4126957768",
      },
    ],
  },
  {
    name: "Switzerland",
    geoJson: Switzerland.features as Feature[],
    color: CountryColors.untaken,
  },
  {
    name: "Andorra",
    geoJson: Andorra.features as Feature[],
    color: CountryColors.untaken,
  },
  {
    name: "Liechtenstein",
    geoJson: Liechtenstein.features as Feature[],
    color: CountryColors.untaken,
  },
  {
    name: "Netherlands",
    geoJson: Netherlands.features as Feature[],
    color: CountryColors.untaken,
  },
  {
    name: "Belgium",
    geoJson: Belgium.features as Feature[],
    color: CountryColors.onceTaken,
    visits: [
      {
        coords: {
          lat: 50.76515969485328,
          lng: 4.2385484474356945,
        },
        author: "Guru",
        year: "2025",
        image: "2025.JPG",
      }
    ],
  },
  {
    name: "Luxembourg",
    geoJson: Luxembourg.features as Feature[],
    color: CountryColors.untaken,
  },
  {
    name: "Britian",
    geoJson: UK.features as Feature[],
    color: CountryColors.somehowInvalid,
    reasonText: "Wir benötigen einen Reisepass, um dort einzureisen.",
  },
  {
    name: "Ireland",
    geoJson: Ireland.features as Feature[],
    color: CountryColors.untaken,
  },
  {
    name: "Denmark",
    geoJson: Denmark.features as Feature[],
    color: CountryColors.twiceTaken,
    visits: [
      {
        coords: {
          lat: 56.018,
          lng: 9.52,
        },
        author: "Andre",
        year: "2003",
      },
      {
        coords: {
          lat: 56.08,
          lng: 12.13,
        },
        author: "Lars",
        year: "2022",
        image: "2022.JPG",
        url: "https://e.pcloud.link/publink/show?code=HiKotalK#/filemanager?folder=4126956293",
      }
    ],
  },
  {
    name: "Germany",
    geoJson: Germany.features as Feature[],
    color: CountryColors.home,
    reasonText: "Home Sweet Home",
    visits: [
      {
        coords: {
          lat: 48.069596277809794,
          lng: 10.273473159723318,
        },
        author: "Lars/Ronny",
        year: "2013",
        image: "2013.jpg",
        url: "https://e.pcloud.link/publink/show?code=HiKotalK#/filemanager?folder=4131913443",
      },
    ],
  },
  {
    name: "Ukraine",
    geoJson: Ukraine.features as Feature[],
    color: CountryColors.totalyInvalid,
    reasonText: "Geht leider nicht wegen des Kriegs!",
  },
  {
    name: "Moldova",
    geoJson: Moldova.features as Feature[],
    color: CountryColors.totalyInvalid,
    reasonText: "Geht leider nicht wegen des Kriegs!",
  },
  {
    name: "Belarus",
    geoJson: Belarus.features as Feature[],
    color: CountryColors.totalyInvalid,
    reasonText: "Geht überhaupt nicht wegen des Kriegs!",
  },
  {
    name: "Russia",
    geoJson: Russia.features as Feature[],
    color: CountryColors.totalyInvalid,
    reasonText: "Geht überhaupt nicht wegen des Kriegs!",
    visits: [
      {
        coords: {
          lat: 55.763924649525485,
          lng:  37.59221169307873,
        },
        image: "2010.jpg",
        author: "Thomas",
        year: "2010",
        url: "https://e.pcloud.link/publink/show?code=HiKotalK#/filemanager?folder=413196610",
      }
    ],
  },
];
