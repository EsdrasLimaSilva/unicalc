const Figure = ({ source }: { source: string }) => {
   return (
      <picture className="figure">
         <img src={source} alt="figura em formato de onda" />
      </picture>
   );
};

export default Figure;
