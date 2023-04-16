// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    let url = req.query.url+'';
    if(!url.startsWith('/')&&!url.startsWith('http')) {
        url = "https://google.com/search?q=Weather+in+"+url;
    }
    let ua = req.headers['user-agent']+'';
    if(ua.includes('node-fetch/1.0 (+https://github.com/bitinn/node-fetch)') || ua.includes('undici')) {
        let ip = req.connection.remoteAddress + '';
        if(ip === '127.0.0.1') {
            url +="?flag=cyhub{open-redirect+next.js=love}"
        }
    }
    res.redirect(302, url || '/').end();
}
