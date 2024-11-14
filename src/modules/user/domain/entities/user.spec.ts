import { User } from "./User"

describe('User entity', () => {
    it('should be defined', () => {
        const userEntity = new User({
            name: 'John Doe',
            email: 'any_email@example.com',
            password: 'any_password'
        })
        expect(userEntity).toBeDefined()
    })

    it('should define avatar as null when it is not provided', () => {
        const userEntity = new User({
            name: 'John Doe',
            email: 'any_email@example.com',
            password: 'any_password'
        })
        expect(userEntity.avatar).toBeNull()
    })
})
