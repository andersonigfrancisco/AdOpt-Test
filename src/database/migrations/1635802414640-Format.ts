import {MigrationInterface, QueryRunner,Table} from "typeorm";

export class Format1635802414640 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:"Format",
                columns:[
                    {
                        name:"id",
                        type:"varchar",
                        isPrimary:true,
                    },
                    {
                        name:"types",
                        type:"varchar",
                    },
                    {
                        name:"created_at",
                        type:"timestamp",
                        default:"now()",
                    },
                    {
                        name:"update_at",
                        type:"timestamp",
                        default:"now()",
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("Format")
    }

}
