import { Test, TestingModule } from '@nestjs/testing';
import { AppService } from './app.service';

describe('AppService', () => {
  let service: AppService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AppService],
    }).compile();

    service = module.get<AppService>(AppService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getHelloWorld', () => {
    it('should get hello world', () => {
      // Arrange

      // Act
      const appService = service.getHello();

      // Assert
      expect(appService).toBe('Hello World!');
    });
  });

  describe('add function', () => {
    it('should be positive result [x + y]', () => {
      // Arrange
      const x = 1;
      const y = 2;

      // Act
      const appService = service.add(x, y);

      // Assert
      const expectResult = 3;
      expect(appService).toBe(expectResult);
    });

    it('should be negative result [(-x) + (-y)]', () => {
      // Arrange
      const x = -1;
      const y = -2;

      // Act
      const appService = service.add(x, y);

      // Assert
      const expectResult = -3;
      expect(appService).toBe(expectResult);
    });

    it('should be negative result [x + (-y)]', () => {
      // Arrange
      const x = 1;
      const y = -2;

      // Act
      const appService = service.add(x, y);

      // Assert
      const expectResult = -1;
      expect(appService).toBe(expectResult);
    });

    it('should be zero [zero + zero]', () => {
      // Arrange
      const x = 0;
      const y = 0;

      // Act
      const appService = service.add(x, y);

      // Assert
      const expectResult = 0;
      expect(appService).toBe(expectResult);
    });
  });

  describe('subtrack function', () => {
    it('should be positive result [x - y]', () => {
      // Arrange
      const x = 2;
      const y = 1;

      // Act
      const appService = service.sub(x, y);

      // Assert
      const expectResult = 1;
      expect(appService).toBe(expectResult);
    });

    it('should be negative result [-x + y]', () => {
      // Arrange
      const x = -2;
      const y = 1;

      // Act
      const appService = service.sub(x, y);

      // Assert
      const expectResult = -3;
      expect(appService).toBe(expectResult);
    });

    it('should be posivite result [x - (-y)]', () => {
      // Arrange
      const x = 2;
      const y = -1;

      // Act
      const appService = service.sub(x, y);

      // Assert
      const expectResult = 3;
      expect(appService).toBe(expectResult);
    });

    it('should be posivite result [(-x) - (-y)]', () => {
      // Arrange
      const x = -2;
      const y = -1;

      // Act
      const appService = service.sub(x, y);

      // Assert
      const expectResult = -1;
      expect(appService).toBe(expectResult);
    });

    it('should be posivite result [0 - 0]', () => {
      // Arrange
      const x = 0;
      const y = 0;

      // Act
      const appService = service.sub(x, y);

      // Assert
      const expectResult = 0;
      expect(appService).toBe(expectResult);
    });
  });

  describe('multiply function', () => {
    it('should posivite result [x * y]', () => {
      // Arrange
      const x = 2;
      const y = 1;

      // Act
      const appService = service.multiply(x, y);

      // Assert
      const expectResult = 2;
      expect(appService).toBe(expectResult);
    });
    //should be negative result [x * (-y)]

    //should be posivite result [(-x) * (-y)]

    //should be negative result [(-x) * (y)]

    //should be posivite result [zero * zero]
  });

  // TO DO divide test
  describe('divide function', () => {
    it('should be  throw error [zero / zero] ', () => {
      // Arrange
      const x = 0;
      const y = 0;
      // Act
      //บัคคับให้ throw ใน function
      const appService = (x1 = x, y1 = y) => {
        return service.divide(x1, y1);
      };

      // Assert
      expect(appService).toThrow();
    });

    it('should be  throw error [x / y] ', () => {
      // Arrange
      const x = 1;
      const y = 1;
      // Act
      //บัคคับให้ throw ใน function
      const appService = service.divide(x, y);

      // Assert
      const expectResult = 1;
      expect(appService).toBe(expectResult);
    });

    //should be posivite result [x / (-y)]

    //should be posivite result [(-x) / (-y)]

    //should be posivite result [(-x) / (y)]

    //should be posivite result [zero / y]

    //should be posivite result [x / zero]
  });
  //
});
