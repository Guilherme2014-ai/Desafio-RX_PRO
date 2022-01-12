import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Users1641941395886 implements MigrationInterface {
  private tableName = "users";

  public async up(queryRunner: QueryRunner): Promise<void> {
    return await queryRunner.createTable(
      new Table({
        name: this.tableName,
        columns: [
          {
            name: "id",
            type: "varchar",
            isPrimary: true,
            isUnique: true,
          },

          {
            name: "name",
            type: "varchar(50)",
            isNullable: false,
          },
          {
            name: "email",
            type: "varchar(50)",
            isUnique: true,
            isNullable: false,
          },
          {
            name: "password_hash",
            type: "varchar",
            isNullable: false,
          },

          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
          {
            name: "updated_at",
            type: "timestamp",
            default: "now()",
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    return await queryRunner.dropTable(this.tableName);
  }
}
