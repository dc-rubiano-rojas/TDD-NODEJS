/* eslint-disable @typescript-eslint/strict-boolean-expressions */
// eslint-disable-next-line node/no-deprecated-api
import { parse, UrlWithParsedQuery } from 'url'
import { InvalidArgument } from '../errors/invalid-arg'

export class UrlLogin {
  public static parseUrl (url: string): UrlWithParsedQuery {
    if (!url) throw new InvalidArgument(url)
    return parse(url, true)
  }
}
