import {MigrationInterface, QueryRunner,Table} from "typeorm";

export class Cookies1635852434379 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
              name: "Cookies",
              columns:[
                  {
                      name: "id",
                      type: "varchar",
                      isPrimary:true,
                  },
                  {
                    name: "name",
                    type: "varchar"
                  },
                  {
                      name: "Flavor_id",
                      type: "varchar"
                  },
                  {
                      name: "Format_id",
                      type: "varchar"
                  },
                  {
                      name: "descrition",
                      type: "varchar"
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
              ],
              foreignKeys:[
                  {
                    name: "FKFlavorCookies",
                    referencedTableName:"Flavor",
                    referencedColumnNames:["id"],
                    columnNames:["Flavor_id"],
                    onDelete:"SET DEFAULT",
                    onUpdate:"SET DEFAULT"
                  },
                  {
                    name: "FKFormatCookies",
                    referencedTableName:"Format",
                    referencedColumnNames:["id"],
                    columnNames:["Format_id"],
                    onDelete:"SET DEFAULT",
                    onUpdate:"SET DEFAULT"
                  }
              ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("Cookies")
    }

}
