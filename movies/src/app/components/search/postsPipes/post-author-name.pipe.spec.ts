import { PostAuthorNamePipe } from './post-author-name.pipe';

describe('PostAuthorNamePipe', () => {
  it('create an instance', () => {
    const pipe = new PostAuthorNamePipe();
    expect(pipe).toBeTruthy();
  });
});
