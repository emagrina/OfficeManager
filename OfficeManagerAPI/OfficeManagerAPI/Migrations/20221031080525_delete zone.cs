using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace OfficeManagerAPI.Migrations
{
    public partial class deletezone : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Chairs_Zones_ZoneId",
                table: "Chairs");

            migrationBuilder.DropForeignKey(
                name: "FK_Rooms_Zones_ZoneId",
                table: "Rooms");

            migrationBuilder.DropTable(
                name: "Zones");

            migrationBuilder.DropIndex(
                name: "IX_Rooms_ZoneId",
                table: "Rooms");

            migrationBuilder.DropIndex(
                name: "IX_Chairs_ZoneId",
                table: "Chairs");

            migrationBuilder.DropColumn(
                name: "ZoneId",
                table: "Rooms");

            migrationBuilder.DropColumn(
                name: "ZoneId",
                table: "Chairs");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "ZoneId",
                table: "Rooms",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "ZoneId",
                table: "Chairs",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateTable(
                name: "Zones",
                columns: table => new
                {
                    ZoneId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Zones", x => x.ZoneId);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Rooms_ZoneId",
                table: "Rooms",
                column: "ZoneId");

            migrationBuilder.CreateIndex(
                name: "IX_Chairs_ZoneId",
                table: "Chairs",
                column: "ZoneId");

            migrationBuilder.AddForeignKey(
                name: "FK_Chairs_Zones_ZoneId",
                table: "Chairs",
                column: "ZoneId",
                principalTable: "Zones",
                principalColumn: "ZoneId",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Rooms_Zones_ZoneId",
                table: "Rooms",
                column: "ZoneId",
                principalTable: "Zones",
                principalColumn: "ZoneId",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
