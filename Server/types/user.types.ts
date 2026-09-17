export type UserRole='admin'| 'manager' | 'member'
export interface User{
text:string,
_id:string,
name:string,
email:string,
role: UserRole,
avatarUrl:string,
isVerified:boolean
createdAt:string,
updatedAt:string
}