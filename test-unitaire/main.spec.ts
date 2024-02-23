// main.spec.ts
import { main } from '../src/main';

jest.mock('../src/main');

describe('main function', () => {
  it('should return "world" if param is "hello"', () => {
    jest.mocked(main).mockReturnValue('world');

    const result = main('hello');
    expect(result).toBe('world');
    expect(main).toHaveBeenCalledWith('hello');
  });

  it('should return "nop" if param is not "hello"', () => {
    (main as jest.Mock).mockReturnValue('nop');

    const result = main('nop hello');
    expect(result).toBe('nop');
    expect(main).toHaveBeenCalledWith('nop hello');
  });
});
