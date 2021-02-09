import {User} from "../src/interface/user"
import {purchase} from "../src/purchase"

// *a. Faça um teste com um usuário com o saldo maior do que o valor de compra*
test("Testing balance greater than value", () => {
	const user: User = {
		name: "Astrodev",
		balance: 100
	}

	const result = purchase(user, 50)
	
	expect(result).toEqual({
		...user,
		balance: 50
	})
})

// b. Faça um teste com um usuário com o saldo igual ao valor de compra

test("Testing balance greater than value", () => {
	const user: User = {
		name: "Astrodev",
		balance: 50
	}

	const result = purchase(user, 50)
	
	expect(result).toEqual({
		...user,
		balance: 0
	})
})

// c*. Faça um teste com um usuário com o saldo menor do que o valor de compra*

test("Testing balance greater than value", () => {
	const user: User = {
		name: "Astrodev",
		balance: 30
	}

	const result = purchase(user, 50)
	
	expect(result).toEqual(undefined)
})