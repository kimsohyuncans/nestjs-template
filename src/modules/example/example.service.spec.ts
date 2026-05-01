import { ExampleService } from './example.service';

describe('ExampleService', () => {
  it('should be defined', () => {
    const service = new ExampleService({ example: {} } as never);

    expect(service).toBeDefined();
  });
});
