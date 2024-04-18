const ReadmeContent = () => {
  return (
    <div className="readmecontainer">
      <div>
        <h3>Fetching mit 'async/await' (Readme)</h3>
        <h4>Wozu das Ganze?</h4>
        <p>
          Während wir (zum Beispiel beim Fetching) auf eine Antwort vom Server
          warten, soll unser synchroner Code nicht blockiert werden. Sobald wir
          die Antwort erhalten, möchten wir aber damit weiterarbeiten. Eine
          Möglichkeit dafür bietet 'async/await'. Diese JavaScript-Keywords sind
          relativ neu und vereinfachen die asynchrone Programmierung deutlich.
        </p>
        <h4>So funktioniert es</h4>
        <p>
          In unserem Beispiel verwenden wir 'async' und 'await' zusammen mit
          'fetch', um Daten von einer API abzurufen, die eine Liste von
          Brauereien bereithält.
        </p>
        <pre>
          <code>
            {`const getData = async () => {
  const res = await fetch(url);
  const dataJson = await res.json();
  console.log(dataJson);
};

getData();`}
          </code>
        </pre>
        <p>
          - <strong>'async'</strong> definiert eine Funktion als asynchron und
          stellt sicher, dass sie ein Promise zurückgibt. <br />-{" "}
          <strong>'await'</strong> kann nur innerhalb einer 'async'-Funktion
          verwendet werden. Durch Verwendung von 'await' wird die Ausführung des
          Codes blockiert, bis die Daten verfügbar sind und das Promise
          erfüllt/abgelehnt ist. Danach wird die Ausführung der 'async'
          -Funktion ganz normal fortgesetzt.
        </p>
        <h5>Fehlerbehandlung mit Try-Catch</h5>
        <p>
          Um Fehler in asynchronem Code mit async/await zu behandeln, verwenden
          wir 'try-catch'. Wenn der Im 'catch'-Block können wir Fehler ausgeben
          oder behandeln. Wenn das Fetch-Promise abgelehnt wird, zum Beispiel
          aufgrund eines Netzwerkfehlers oder einer ungültigen API-Antwort, wird
          der Fehler im 'catch'-Block behandelt und zum Beispiel in der Konsole
          ausgegeben:
        </p>
        <pre>
          <code>
            {`const getData = async () => {
  try {
    const res = await fetch(url);
    const dataJson = await res.json();
    ...
  } catch (error) {
    console.log(error);
  }
};`}
          </code>
        </pre>
        <h5>Besonderheit in 'React'</h5>
        <p>
          In 'React' werden Komponenten oft neu gerendert, sobald sich States
          oder Props ändern. Damit das Fetching nicht bei jedem neuen Rendern
          wiederholt wird, sollte der gesamte 'fetch'-Block in eine
          'useEffect'-Hook eingebettet werden:
        </p>
        <pre>
          <code>
            {`useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch(url);
        ...
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);`}
          </code>
        </pre>
        <h5>Vorteile von 'async/await' gegenüber '.then'</h5>
        <p>
          Der größte Vorteil von 'async/await' gegenüber der Verwendung von
          '.then'-Ketten ist die Lesbarkeit. Mit 'async/await' sieht asynchroner
          Code fast synchron aus, besteht nur aus wenigen Code-Zeilen und ist
          dadurch leichter zu lesen. Außerdem bietet 'async/await' sehr gute
          Debugging-Möglichkeiten.
        </p>
      </div>
    </div>
  );
};

export default ReadmeContent;
