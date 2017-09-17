import { OpBody } from './opBody';
import { PhotosBody } from './photosBody';
import { GeometryBody } from './geometryBody';


export class ResultsBody {
    geometry: GeometryBody;
    icon: string;
    id: string;
    name: string;
    opening_hours: OpBody;
    photos: PhotosBody[];
    place_id: string;
    price_level: number;
    rating: number;
    reference: string;
    scope: string;
    types: string[];
    vicinity: string;
  }