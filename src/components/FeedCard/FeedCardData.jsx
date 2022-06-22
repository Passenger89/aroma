import { faker } from '@faker-js/faker'
import IMAGES from '../Images/Images.jsx'

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export const data = [
  {
    id: 1,
    avatar: faker.image.avatar(),
    name: faker.name.findName(),
    date: faker.date.recent().getMinutes(),
    text: faker.random.words(random(5, 25)),
    image: IMAGES.image1,
  },
  {
    id: 2,
    avatar: faker.image.avatar(),
    name: faker.name.findName(),
    date: faker.date.recent().getMinutes(),
    text: faker.random.words(random(5, 25)),
    image: IMAGES.image2,
  },
  {
    id: 3,
    avatar: faker.image.avatar(),
    name: faker.name.findName(),
    date: faker.date.recent().getMinutes(),
    text: faker.random.words(random(5, 25)),
    image: IMAGES.image3,
  },
  {
    id: 4,
    avatar: faker.image.avatar(),
    name: faker.name.findName(),
    date: faker.date.recent().getMinutes(),
    text: faker.random.words(random(5, 25)),
    image: IMAGES.image4,
  },
  {
    id: 5,
    avatar: faker.image.avatar(),
    name: faker.name.findName(),
    date: faker.date.recent().getMinutes(),
    text: faker.random.words(random(5, 25)),
    image: IMAGES.image5,
  },
  {
    id: 6,
    avatar: faker.image.avatar(),
    name: faker.name.findName(),
    date: faker.date.recent().getMinutes(),
    text: faker.random.words(random(5, 25)),
    image: IMAGES.image6,
  },
  {
    id: 7,
    avatar: faker.image.avatar(),
    name: faker.name.findName(),
    date: faker.date.recent().getMinutes(),
    text: faker.random.words(random(5, 25)),
    image: IMAGES.image7,
  },
]
