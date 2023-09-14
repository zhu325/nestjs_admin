import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { User } from './user.entity'

@Entity()
export class Profile {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  gender: string

  @Column()
  photo: string

  @Column()
  address: string

  @ManyToOne(() => User, (user) => user.profile)
  user: User
}
