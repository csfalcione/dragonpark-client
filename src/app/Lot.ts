import {Report} from './Report'

export interface Lot {
  id: number
  name: string
  address: string
  lat: number
  lng: number
  status?: number
  reports?: Report[]

}
