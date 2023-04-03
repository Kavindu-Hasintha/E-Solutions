 global using config_service.Services.EmailService;
global using config_service.Models;
using Microsoft.Extensions.Options;
using Newtonsoft.Json.Serialization;

internal class Program
{
    private static void Main(string[] args)
    {
        var builder = WebApplication.CreateBuilder(args);

        // Add services to the container.

        builder.Services.AddControllers();
        // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
        builder.Services.AddEndpointsApiExplorer();
        builder.Services.AddSwaggerGen();

        builder.Services.AddScoped<IEmailService, EmailService>();

        // Enble Cors (2023/01/22)
        builder.Services.AddCors(c =>
        {
            c.AddPolicy("AllowOrigin", options => options.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader());
        });

        // Json Serializer`(2023/01/22)
        builder.Services.AddControllersWithViews().AddNewtonsoftJson(options =>
            options.SerializerSettings.ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore)
            .AddNewtonsoftJson(options => options.SerializerSettings.ContractResolver = new DefaultContractResolver()
        );

        var app = builder.Build();

        // Configure the HTTP request pipeline.
        if (app.Environment.IsDevelopment())
        {
            app.UseSwagger();
            app.UseSwaggerUI();
        }

        // Enble Cors (2023/01/22)
        // app.UseCors(options => options.AllowAnyOrigin().AllowAnyHeader().AllowAnyHeader());
        app.UseCors(options => options.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader());

        app.UseAuthorization();

        app.MapControllers();

        app.Run();
    }
}