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