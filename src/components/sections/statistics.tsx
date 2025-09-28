import React from 'react';

const statisticsData = [
  { value: '1330', labelLine1: 'Todos los', labelLine2: 'juegos' },
  { value: '28.3M', labelLine1: 'Total de', labelLine2: 'descargas' },
  { value: '14', labelLine1: 'Todas las', labelLine2: 'Colecciones' },
  { value: '687', labelLine1: 'Usuarios', labelLine2: 'registrados' },
];

const StatisticsSection = () => {
  return (
    <section className="container mx-auto py-16 md:py-20">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-center text-3xl font-semibold text-foreground">
          Estadísticas de <span className="font-bold text-primary">Gamesfull</span>
        </h2>
        <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4">
          {statisticsData.map((stat) => (
            <div key={stat.value} className="flex flex-col items-center text-center">
              <p className="text-4xl font-bold tracking-tight text-foreground">{stat.value}</p>
              <p className="mt-2 text-sm text-muted-foreground">
                {stat.labelLine1}
                <br />
                {stat.labelLine2}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;