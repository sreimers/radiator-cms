import axios from 'axios'

export default {
  createAudioFile: data => {
    const query = new FormData()
    query.append('audio_file[audio_id]', data.id)
    query.append('audio_file[file]', data.file)
    query.append('audio_file[title]', data.title)
    return axios.post(
      `${process.env.baseUrl}/api/rest/${process.env.backendVersion}/audios/${
        data.id
      }/audio_files`,
      query,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: 'Bearer ' + data.token
        }
      }
    )
  },
  createAudioPublication: data => {
    const query = JSON.stringify({
      audio: {
        episode_id: data.episodeId,
        title: data.file.name,
        network_id: data.networkId
      }
    })
    return axios.post(
      `${process.env.baseUrl}/api/rest/${process.env.backendVersion}/networks/${
        data.networkId
      }/audios`,
      query,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + data.token
        }
      }
    )
  },
  createPodcastAudio: data => {
    const query = JSON.stringify({
      audio: {
        episode_id: data.episodeId,
        title: data.file.name,
        network_id: data.networkId
      }
    })
    return axios.post(
      `${process.env.baseUrl}/api/rest/${process.env.backendVersion}/audios`,
      query,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + data.token
        }
      }
    )
  },
  updateAudio: data => {
    const query = JSON.stringify({
      audio: {
        // image: data.image,
        title: data.title
      }
    })
    return axios.patch(
      `${process.env.baseUrl}/api/rest/${process.env.backendVersion}/audios/${
        data.id
      }`,
      query,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + data.token
        }
      }
    )
  }
}
