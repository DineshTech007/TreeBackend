import { Router, Request, Response } from 'express';
import { FamilyTreeService } from '../services/familyTreeService';
import { ApiResponse } from '../types/Person';
import { TranslationService } from '../services/translationService';

const router = Router();

/**
 * GET /api/family-tree?lang=mr|en
 * Get all family members with language support
 */
router.get('/', (req: Request, res: Response) => {
  try {
    const language = TranslationService.extractLanguageFromRequest(req);
    const result = FamilyTreeService.getAllFamilyMembers(language);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Internal server error',
      error: error instanceof Error ? error.message : 'Unknown error'
    } as ApiResponse);
  }
});

/**
 * GET /api/family-tree/search?q=name
 * Search family members by name
 */
router.get('/search', (req: Request, res: Response) => {
  try {
    const { q } = req.query;
    
    if (!q || typeof q !== 'string') {
      return res.status(400).json({
        success: false,
        message: 'Search query parameter "q" is required'
      } as ApiResponse);
    }

    const results = FamilyTreeService.searchByName(q);
    
    res.status(200).json({
      success: true,
      data: results,
      message: `Search results for "${q}" retrieved successfully`
    } as ApiResponse);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Internal server error',
      error: error instanceof Error ? error.message : 'Unknown error'
    } as ApiResponse);
  }
});

/**
 * GET /api/family-tree/:id
 * Get family member by ID
 */
router.get('/:id', (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const person = FamilyTreeService.getFamilyMemberById(id);
    
    if (!person) {
      return res.status(404).json({
        success: false,
        message: `Family member with ID ${id} not found`
      } as ApiResponse);
    }

    res.status(200).json({
      success: true,
      data: person,
      message: 'Family member retrieved successfully'
    } as ApiResponse);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Internal server error',
      error: error instanceof Error ? error.message : 'Unknown error'
    } as ApiResponse);
  }
});

/**
 * GET /api/family-tree/generation/:generation
 * Get family members by generation
 */
router.get('/generation/:generation', (req: Request, res: Response) => {
  try {
    const generation = parseInt(req.params.generation);
    
    if (isNaN(generation) || generation < 1 || generation > 7) {
      return res.status(400).json({
        success: false,
        message: 'Generation must be a number between 1 and 7'
      } as ApiResponse);
    }

    const members = FamilyTreeService.getFamilyMembersByGeneration(generation);
    
    res.status(200).json({
      success: true,
      data: members,
      message: `Generation ${generation} members retrieved successfully`
    } as ApiResponse);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Internal server error',
      error: error instanceof Error ? error.message : 'Unknown error'
    } as ApiResponse);
  }
});

/**
 * GET /api/family-tree/:id/children
 * Get children of a specific person
 */
router.get('/:id/children', (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const children = FamilyTreeService.getChildren(id);
    
    res.status(200).json({
      success: true,
      data: children,
      message: `Children of ${id} retrieved successfully`
    } as ApiResponse);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Internal server error',
      error: error instanceof Error ? error.message : 'Unknown error'
    } as ApiResponse);
  }
});

/**
 * GET /api/family-tree/:id/parents
 * Get parents of a specific person
 */
router.get('/:id/parents', (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const parents = FamilyTreeService.getParents(id);
    
    res.status(200).json({
      success: true,
      data: parents,
      message: `Parents of ${id} retrieved successfully`
    } as ApiResponse);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Internal server error',
      error: error instanceof Error ? error.message : 'Unknown error'
    } as ApiResponse);
  }
});

/**
 * GET /api/family-tree/:id/siblings
 * Get siblings of a specific person
 */
router.get('/:id/siblings', (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const siblings = FamilyTreeService.getSiblings(id);
    
    res.status(200).json({
      success: true,
      data: siblings,
      message: `Siblings of ${id} retrieved successfully`
    } as ApiResponse);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Internal server error',
      error: error instanceof Error ? error.message : 'Unknown error'
    } as ApiResponse);
  }
});

export default router;
