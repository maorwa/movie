import { MovieNamePipe } from './movie-name.pipe';

describe('MovieNamePipe', () => {
  it('create an instance', () => {
    const pipe = new MovieNamePipe();
    expect(pipe).toBeTruthy();
  });
});
