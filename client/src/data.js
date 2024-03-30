import Thumbnaill from './images/blog1.jpg'
import Thumbnail2 from './images/blog2.jpg'
import Thumbnail3 from './images/blog3.jpg'
import Thumbnail4 from './images/blog4.jpg'

export const DUMMY_POSTS = [
    {
      id: '1',
      thumbnail: Thumbnaill,
      category: 'Education',
      title: 'This is the title blog.',
      desc: 'Lorem consectetur culpa, officia tempora doloribus ipsam eligendi deserunt perferendis. Animi quod, quibusdam modi molestiae perspiciatis placeat, incidunt porro doloremque sint, sequi excepturi enim.',
      authorID: 3
    },
    {
        id: '2',
        thumbnail: Thumbnail2,
        category: 'Science',
        title: 'This is the title of the very first post on this blog. ',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat dolor dolor',
        authorID: 1
    },
    {
        id: '3',
        thumbnail: Thumbnail3,
        category: 'Weather',
        title: 'This is the title blog.',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat dolor dolor',
        authorID: 13 
    },
    {
        id: '4',
        thumbnail: Thumbnail4,
        category: 'Farming',
        title: 'This is the title of the very last post on this blog.',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat dolor dolor',
        authorID: 11
    },
]