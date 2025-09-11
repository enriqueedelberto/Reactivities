type Activity = {
  id: string;
  title: string;
  date: Date;
  description: string;
  category: string;
  isCancelled: boolean;
  city: string;
  venue: string;
  latitude: number;
  longitude: number;
  attendees: Profile[]
  isGoing: boolean
  isHost: boolean
  hostId: string
  hostDisplayName: string
  hostImageUrl: string
}

type Profile = {
  id: string
  displayName: string
  bio?: string
  imageUrl?: string
}

type Photo = {
  id: string
  url: string
}

type User = {
  id: string;
  email: string;
  displayName: string;
  imageUrl?: string;
}

type ChatComment = {
  id: string
  createAt: Date
  body: string
  userId: string
  displayName: string
  imageUrl?: string
}

export interface Location {
  place_id: string
  licence: string
  osm_type: string
  osm_id: string
  boundingbox: string[]
  lat: string
  lon: string
  display_name: string
  class: string
  type: string
  importance: number
  icon: string
}

export type Address = {
  name: string;
  house_number: string;
  road: string;
  suburb?: string;
  city: string;
  county: string;
  state: string;
  postcode: string;
  country: string;
  country_code: string;
}