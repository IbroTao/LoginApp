

/** auth middleware */
export default async function Auth(req, res, next) {
    try {
        
        // access authorize header to validate request
        const token = req.headers.authorization;
        res.json(token); 
        
    } catch (error) {
        res.status(401).json({ error: "Authentication Failed!"})
    }
}