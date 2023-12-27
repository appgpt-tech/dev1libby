//to be autogenerated as template, one per resource
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("settings")
export class SettingsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  settingname: string;

  @Column()
  settingvalue: string;
}