export class Log {}
import { User } from '@/users/entities/users.entity'
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Logs {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  path: string

  @Column()
  method: string

  @Column()
  data: string

  @Column()
  result: number

  @ManyToOne(() => User, (user) => user.logs)
  @JoinColumn()
  user: User
}
