import { AvatarGenerator } from 'random-avatar-generator'

const generator = new AvatarGenerator()

export const avatarURL = (id) => {
  return generator.generateRandomAvatar(id)
}
