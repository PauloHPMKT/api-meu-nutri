import { User } from "./User"

const makeSut = (): User => {
    const sut = new User({
        name: 'John Doe',
        email: 'any_email@example.com',
        password: 'any_password'    
    })
    return sut
}

describe('User entity', () => {
    it('should be defined', () => {
        const sut = makeSut()
        expect(sut).toBeDefined()
    })

    it('should define avatar as null when it is not provided', () => {
        const sut = makeSut()
        expect(sut.avatar).toBeNull()
    })

    it('should define isActive as true when it is not provided', () => {
        const sut = makeSut()
        expect(sut.isActive).toBeTruthy()
    })
})
