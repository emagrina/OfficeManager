using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace OfficeManagerAPI.Migrations
{
    public partial class secodmigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Room_Id",
                table: "Chairs");

            migrationBuilder.AddColumn<int>(
                name: "ChairId",
                table: "Zone",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Zone_ChairId",
                table: "Zone",
                column: "ChairId");

            migrationBuilder.AddForeignKey(
                name: "FK_Zone_Chairs_ChairId",
                table: "Zone",
                column: "ChairId",
                principalTable: "Chairs",
                principalColumn: "Id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Zone_Chairs_ChairId",
                table: "Zone");

            migrationBuilder.DropIndex(
                name: "IX_Zone_ChairId",
                table: "Zone");

            migrationBuilder.DropColumn(
                name: "ChairId",
                table: "Zone");

            migrationBuilder.AddColumn<string>(
                name: "Room_Id",
                table: "Chairs",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }
    }
}
