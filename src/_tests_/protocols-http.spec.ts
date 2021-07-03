import { UrlLogin } from '../protocols/protocols-http'
import { InvalidArgument } from '../errors/invalid-arg'

describe('Protocols Http and Querys', () => {
  test('Url Login', () => {
    const parseUrl = UrlLogin.parseUrl('http://localhost/3000/login')

    expect(parseUrl.href).toBe('http://localhost/3000/login')
    // expect(parseUrl.port).toBe('3000')
  })

  test('Response Query', () => {
    const parsedUrl = UrlLogin.parseUrl('http://localhost:3000/login?user=user&password=password')
    const expectAuth = {
      user: 'user',
      password: 'password'
    }

    expect(parsedUrl.query).toEqual(expectAuth)
  })

  test('Url User', () => {
    const parseUrl = UrlLogin.parseUrl('http://localhost/3000/user')

    expect(parseUrl.href).toBe('http://localhost/3000/user')
    // expect(parseUrl.port).toBe('3000')
  })

  test('Response Query User', () => {
    const parsedUrl = UrlLogin.parseUrl('http://localhost:3000/user?user=user&password=password&name=name&lastname=lastname')
    const expectAuth = {
      user: 'user',
      password: 'password',
      name: 'name',
      lastname: 'lastname'
    }

    expect(parsedUrl.query).toEqual(expectAuth)
  })

  test('Invalid Url', () => {
    function expectError (): void {
      UrlLogin.parseUrl('')
    }
    expect(expectError).toThrowError(new InvalidArgument(''))
  })
})

// Note: Crear testing y clase de producción
// http://localhost:3000/user
// http://localhost:3000/user?user=user&password=password&name=name&lastname=lastname
