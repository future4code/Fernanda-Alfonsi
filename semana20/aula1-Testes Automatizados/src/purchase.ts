import {User} from "./interface/user"


export function purchase (user: User, value: number): User | undefined {
	if(user.balance >= value) {
		return {...user, balance: user.balance - value}
        
	}else{
        return undefined
    }
	
}