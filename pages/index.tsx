import Head from 'next/head'

const House = props => (
  <div>
    <Head>
      <title>The page title</title>
    </Head>
    <p style={{ fontFamily: "'Lora', serif", fontStyle: "italic", fontWeight: 900, fontSize: 30 }}> Looking into this</p>
    {/* the rest of the JSX */}
  </div>
)

export default House