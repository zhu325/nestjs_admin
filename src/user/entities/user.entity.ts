import { Logs } from '@/logs/entities/logs.entity'
import { Roles } from '@/roles/entities/roles.entity'
import { Column, Entity, JoinTable, ManyToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Profile } from './profile.entity'

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  username: string

  @Column()
  password: string

  // typescript -> 数据库关联关系 Mapping
  @ManyToMany(() => Logs, (logs) => logs.user, { cascade: true })
  logs: Logs[]

  @OneToOne(() => Profile, (profile) => profile.user, { cascade: true })
  profile: Profile

  @ManyToMany(() => Roles, (roles) => roles.users, { cascade: ['insert'] })
  @JoinTable({ name: 'user_roles' })
  roles: Roles[]
}
