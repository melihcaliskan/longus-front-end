import { API_URL, API_URL_W } from './urls'

export const handlePhoto = (photo) => {
    return photo ? (API_URL_W +
        (
            photo.formats.large ?
                photo.formats.large.url
                :
                photo.formats.medium ?
                    photo.formats.medium.url
                    :
                    photo.formats.small ?
                        photo.formats.small.url
                        :
                        photo.formats.thumbnail.url
        )
    ) : "/assets/no-photo.svg"
}

export const availableLangKey = (data) => {
    let found_key;

    // Objecti gezip null olmayan değer arıyoruz.
    Object.keys(data).forEach(key => {
      const value = data[key];
      if (value && key != "id") {
        found_key = key
      }
    })
    return found_key
  }