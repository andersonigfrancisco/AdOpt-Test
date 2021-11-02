import {MigrationInterface, QueryRunner,Table} from "typeorm";

export class Pots1635853134739 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
              name: "Pots",
              columns:[
                  {
                      name: "id",
                      type: "varchar",
                      isPrimary:true,
                  },
                  {
                    name: "name",
                    type: "varchar",
                  },
                  {
                    name: "quantity",
                    type: "int"
                  },
                  {
                      name: "Cookie_id",
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
                    name: "FKFCookiesPots",
                    referencedTableName:"Cookies",
                    referencedColumnNames:["id"],
                    columnNames:["Cookie_id"],
                    onDelete:"SET DEFAULT",
                    onUpdate:"SET DEFAULT"
                  }
              ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
