//     This code was generated by a Reinforced.Typings tool. 
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.

import { Skill } from './Skill';

export interface Field
{
	id: string;
	title: string|null;
	description: string|null;
	skills: Skill[];
}
