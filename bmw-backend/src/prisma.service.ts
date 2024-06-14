// prisma.service.ts

import { Injectable, OnModuleInit, INestApplication } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  constructor() {
    super();
  }

  async onModuleInit() {
    await this.$connect();
  }

  async enableShutdownHooks(app: INestApplication) {
    this.setupBeforeExitHandler(app);
  }

  private setupBeforeExitHandler(app: INestApplication) {
    const prismaClient = this as any;

    prismaClient.$on('beforeExit', async () => {
      await app.close();
    });
  }
}
